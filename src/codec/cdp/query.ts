/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetData } from "./asset_params";
import { StringValue } from "../google/protobuf/wrappers";

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

export interface QueryRateStrategiesAllRequest {}

export interface QueryRateStrategiesAllResponse {
  rateStrategyParamsAll: RateStrategyParams[];
}

export interface QueryAssetRequest {
  denom: string;
}

export interface QueryAssetResponse {
  assetData?: AssetData;
}

export interface QueryAssetsAllRequest {}

export interface QueryAssetsAllResponse {
  assetDataAll: AssetData[];
}

export interface QueryAccountCollateralsRequest {
  account: string;
}

export interface QueryAccountCollateralsResponse {
  collaterals: Collateral[];
}

export interface Collateral {
  cdpDenom: string;
  denom: string;
  cdpToActualRatio: string;
  amount: string;
  valueInUsd: string;
}

export interface QueryAccountDebtsRequest {
  account: string;
}

export interface QueryAccountDebtsResponse {
  debts: Debt[];
}

export interface Debt {
  denom: string;
  amount: string;
  valueInUsd: string;
}

export interface QueryAccountDataRequest {
  account: string;
}

export interface QueryAccountDataResponse {
  totalCollateralsUsd: string;
  totalDebtsUsd: string;
  availableBorrowsUsd: string;
  currLiquidationThreshold: string;
  healthFactor: string;
}

export interface QueryBorrowsRequest {
  address: string;
}

export interface QueryBorrowsResponse {
  borrows: DBBorrow[];
}

export interface QueryBorrowsAllRequest {}

export interface QueryBorrowsAllResponse {
  borrows: DBBorrow[];
}

export interface DBBorrow {
  address?: string;
  denom: string;
  amount: string;
}

export interface QueryCollateralsRequest {
  address: string;
}

export interface QueryCollateralsResponse {
  collaterals: DBCollateral[];
}

export interface QueryCollateralsAllRequest {}

export interface QueryCollateralsAllResponse {
  collaterals: DBCollateral[];
}

export interface DBCollateral {
  address?: string;
  denom: string;
  amount: string;
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

const baseQueryRateStrategiesAllRequest: object = {};

export const QueryRateStrategiesAllRequest = {
  encode(
    _: QueryRateStrategiesAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateStrategiesAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateStrategiesAllRequest,
    } as QueryRateStrategiesAllRequest;
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

  fromJSON(_: any): QueryRateStrategiesAllRequest {
    const message = {
      ...baseQueryRateStrategiesAllRequest,
    } as QueryRateStrategiesAllRequest;
    return message;
  },

  toJSON(_: QueryRateStrategiesAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryRateStrategiesAllRequest>
  ): QueryRateStrategiesAllRequest {
    const message = {
      ...baseQueryRateStrategiesAllRequest,
    } as QueryRateStrategiesAllRequest;
    return message;
  },
};

const baseQueryRateStrategiesAllResponse: object = {};

export const QueryRateStrategiesAllResponse = {
  encode(
    message: QueryRateStrategiesAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rateStrategyParamsAll) {
      RateStrategyParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateStrategiesAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateStrategiesAllResponse,
    } as QueryRateStrategiesAllResponse;
    message.rateStrategyParamsAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParamsAll.push(
            RateStrategyParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategiesAllResponse {
    const message = {
      ...baseQueryRateStrategiesAllResponse,
    } as QueryRateStrategiesAllResponse;
    message.rateStrategyParamsAll = (object.rateStrategyParamsAll ?? []).map(
      (e: any) => RateStrategyParams.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryRateStrategiesAllResponse): unknown {
    const obj: any = {};
    if (message.rateStrategyParamsAll) {
      obj.rateStrategyParamsAll = message.rateStrategyParamsAll.map((e) =>
        e ? RateStrategyParams.toJSON(e) : undefined
      );
    } else {
      obj.rateStrategyParamsAll = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateStrategiesAllResponse>
  ): QueryRateStrategiesAllResponse {
    const message = {
      ...baseQueryRateStrategiesAllResponse,
    } as QueryRateStrategiesAllResponse;
    message.rateStrategyParamsAll = (object.rateStrategyParamsAll ?? []).map(
      (e) => RateStrategyParams.fromPartial(e)
    );
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
    if (message.assetData !== undefined) {
      AssetData.encode(message.assetData, writer.uint32(10).fork()).ldelim();
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
          message.assetData = AssetData.decode(reader, reader.uint32());
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
    message.assetData =
      object.assetData !== undefined && object.assetData !== null
        ? AssetData.fromJSON(object.assetData)
        : undefined;
    return message;
  },

  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    message.assetData !== undefined &&
      (obj.assetData = message.assetData
        ? AssetData.toJSON(message.assetData)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    const message = { ...baseQueryAssetResponse } as QueryAssetResponse;
    message.assetData =
      object.assetData !== undefined && object.assetData !== null
        ? AssetData.fromPartial(object.assetData)
        : undefined;
    return message;
  },
};

const baseQueryAssetsAllRequest: object = {};

export const QueryAssetsAllRequest = {
  encode(
    _: QueryAssetsAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAssetsAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAssetsAllRequest } as QueryAssetsAllRequest;
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

  fromJSON(_: any): QueryAssetsAllRequest {
    const message = { ...baseQueryAssetsAllRequest } as QueryAssetsAllRequest;
    return message;
  },

  toJSON(_: QueryAssetsAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAssetsAllRequest>): QueryAssetsAllRequest {
    const message = { ...baseQueryAssetsAllRequest } as QueryAssetsAllRequest;
    return message;
  },
};

const baseQueryAssetsAllResponse: object = {};

export const QueryAssetsAllResponse = {
  encode(
    message: QueryAssetsAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assetDataAll) {
      AssetData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAssetsAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAssetsAllResponse } as QueryAssetsAllResponse;
    message.assetDataAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetDataAll.push(AssetData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetsAllResponse {
    const message = { ...baseQueryAssetsAllResponse } as QueryAssetsAllResponse;
    message.assetDataAll = (object.assetDataAll ?? []).map((e: any) =>
      AssetData.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAssetsAllResponse): unknown {
    const obj: any = {};
    if (message.assetDataAll) {
      obj.assetDataAll = message.assetDataAll.map((e) =>
        e ? AssetData.toJSON(e) : undefined
      );
    } else {
      obj.assetDataAll = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAssetsAllResponse>
  ): QueryAssetsAllResponse {
    const message = { ...baseQueryAssetsAllResponse } as QueryAssetsAllResponse;
    message.assetDataAll = (object.assetDataAll ?? []).map((e) =>
      AssetData.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAccountCollateralsRequest: object = { account: "" };

export const QueryAccountCollateralsRequest = {
  encode(
    message: QueryAccountCollateralsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountCollateralsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountCollateralsRequest,
    } as QueryAccountCollateralsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralsRequest {
    const message = {
      ...baseQueryAccountCollateralsRequest,
    } as QueryAccountCollateralsRequest;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : "";
    return message;
  },

  toJSON(message: QueryAccountCollateralsRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountCollateralsRequest>
  ): QueryAccountCollateralsRequest {
    const message = {
      ...baseQueryAccountCollateralsRequest,
    } as QueryAccountCollateralsRequest;
    message.account = object.account ?? "";
    return message;
  },
};

const baseQueryAccountCollateralsResponse: object = {};

export const QueryAccountCollateralsResponse = {
  encode(
    message: QueryAccountCollateralsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collaterals) {
      Collateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountCollateralsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountCollateralsResponse,
    } as QueryAccountCollateralsResponse;
    message.collaterals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collaterals.push(Collateral.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralsResponse {
    const message = {
      ...baseQueryAccountCollateralsResponse,
    } as QueryAccountCollateralsResponse;
    message.collaterals = (object.collaterals ?? []).map((e: any) =>
      Collateral.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAccountCollateralsResponse): unknown {
    const obj: any = {};
    if (message.collaterals) {
      obj.collaterals = message.collaterals.map((e) =>
        e ? Collateral.toJSON(e) : undefined
      );
    } else {
      obj.collaterals = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountCollateralsResponse>
  ): QueryAccountCollateralsResponse {
    const message = {
      ...baseQueryAccountCollateralsResponse,
    } as QueryAccountCollateralsResponse;
    message.collaterals = (object.collaterals ?? []).map((e) =>
      Collateral.fromPartial(e)
    );
    return message;
  },
};

const baseCollateral: object = {
  cdpDenom: "",
  denom: "",
  cdpToActualRatio: "",
  amount: "",
  valueInUsd: "",
};

export const Collateral = {
  encode(
    message: Collateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cdpDenom !== "") {
      writer.uint32(10).string(message.cdpDenom);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.cdpToActualRatio !== "") {
      writer.uint32(26).string(message.cdpToActualRatio);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.valueInUsd !== "") {
      writer.uint32(42).string(message.valueInUsd);
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
          message.cdpDenom = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.cdpToActualRatio = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.valueInUsd = reader.string();
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
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cdpToActualRatio =
      object.cdpToActualRatio !== undefined && object.cdpToActualRatio !== null
        ? String(object.cdpToActualRatio)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.valueInUsd =
      object.valueInUsd !== undefined && object.valueInUsd !== null
        ? String(object.valueInUsd)
        : "";
    return message;
  },

  toJSON(message: Collateral): unknown {
    const obj: any = {};
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.denom !== undefined && (obj.denom = message.denom);
    message.cdpToActualRatio !== undefined &&
      (obj.cdpToActualRatio = message.cdpToActualRatio);
    message.amount !== undefined && (obj.amount = message.amount);
    message.valueInUsd !== undefined && (obj.valueInUsd = message.valueInUsd);
    return obj;
  },

  fromPartial(object: DeepPartial<Collateral>): Collateral {
    const message = { ...baseCollateral } as Collateral;
    message.cdpDenom = object.cdpDenom ?? "";
    message.denom = object.denom ?? "";
    message.cdpToActualRatio = object.cdpToActualRatio ?? "";
    message.amount = object.amount ?? "";
    message.valueInUsd = object.valueInUsd ?? "";
    return message;
  },
};

const baseQueryAccountDebtsRequest: object = { account: "" };

export const QueryAccountDebtsRequest = {
  encode(
    message: QueryAccountDebtsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDebtsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDebtsRequest,
    } as QueryAccountDebtsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtsRequest {
    const message = {
      ...baseQueryAccountDebtsRequest,
    } as QueryAccountDebtsRequest;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : "";
    return message;
  },

  toJSON(message: QueryAccountDebtsRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDebtsRequest>
  ): QueryAccountDebtsRequest {
    const message = {
      ...baseQueryAccountDebtsRequest,
    } as QueryAccountDebtsRequest;
    message.account = object.account ?? "";
    return message;
  },
};

const baseQueryAccountDebtsResponse: object = {};

export const QueryAccountDebtsResponse = {
  encode(
    message: QueryAccountDebtsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.debts) {
      Debt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDebtsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDebtsResponse,
    } as QueryAccountDebtsResponse;
    message.debts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debts.push(Debt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtsResponse {
    const message = {
      ...baseQueryAccountDebtsResponse,
    } as QueryAccountDebtsResponse;
    message.debts = (object.debts ?? []).map((e: any) => Debt.fromJSON(e));
    return message;
  },

  toJSON(message: QueryAccountDebtsResponse): unknown {
    const obj: any = {};
    if (message.debts) {
      obj.debts = message.debts.map((e) => (e ? Debt.toJSON(e) : undefined));
    } else {
      obj.debts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDebtsResponse>
  ): QueryAccountDebtsResponse {
    const message = {
      ...baseQueryAccountDebtsResponse,
    } as QueryAccountDebtsResponse;
    message.debts = (object.debts ?? []).map((e) => Debt.fromPartial(e));
    return message;
  },
};

const baseDebt: object = { denom: "", amount: "", valueInUsd: "" };

export const Debt = {
  encode(message: Debt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.valueInUsd !== "") {
      writer.uint32(26).string(message.valueInUsd);
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
          message.amount = reader.string();
          break;
        case 3:
          message.valueInUsd = reader.string();
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
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.valueInUsd =
      object.valueInUsd !== undefined && object.valueInUsd !== null
        ? String(object.valueInUsd)
        : "";
    return message;
  },

  toJSON(message: Debt): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.valueInUsd !== undefined && (obj.valueInUsd = message.valueInUsd);
    return obj;
  },

  fromPartial(object: DeepPartial<Debt>): Debt {
    const message = { ...baseDebt } as Debt;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.valueInUsd = object.valueInUsd ?? "";
    return message;
  },
};

const baseQueryAccountDataRequest: object = { account: "" };

export const QueryAccountDataRequest = {
  encode(
    message: QueryAccountDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
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
          message.account = reader.string();
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
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : "";
    return message;
  },

  toJSON(message: QueryAccountDataRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDataRequest>
  ): QueryAccountDataRequest {
    const message = {
      ...baseQueryAccountDataRequest,
    } as QueryAccountDataRequest;
    message.account = object.account ?? "";
    return message;
  },
};

const baseQueryAccountDataResponse: object = {
  totalCollateralsUsd: "",
  totalDebtsUsd: "",
  availableBorrowsUsd: "",
  currLiquidationThreshold: "",
  healthFactor: "",
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
    if (message.healthFactor !== "") {
      writer.uint32(42).string(message.healthFactor);
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
        case 5:
          message.healthFactor = reader.string();
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
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
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
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
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
    message.healthFactor = object.healthFactor ?? "";
    return message;
  },
};

const baseQueryBorrowsRequest: object = { address: "" };

export const QueryBorrowsRequest = {
  encode(
    message: QueryBorrowsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBorrowsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBorrowsRequest } as QueryBorrowsRequest;
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

  fromJSON(object: any): QueryBorrowsRequest {
    const message = { ...baseQueryBorrowsRequest } as QueryBorrowsRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryBorrowsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBorrowsRequest>): QueryBorrowsRequest {
    const message = { ...baseQueryBorrowsRequest } as QueryBorrowsRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryBorrowsResponse: object = {};

export const QueryBorrowsResponse = {
  encode(
    message: QueryBorrowsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.borrows) {
      DBBorrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBorrowsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBorrowsResponse } as QueryBorrowsResponse;
    message.borrows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrows.push(DBBorrow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBorrowsResponse {
    const message = { ...baseQueryBorrowsResponse } as QueryBorrowsResponse;
    message.borrows = (object.borrows ?? []).map((e: any) =>
      DBBorrow.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryBorrowsResponse): unknown {
    const obj: any = {};
    if (message.borrows) {
      obj.borrows = message.borrows.map((e) =>
        e ? DBBorrow.toJSON(e) : undefined
      );
    } else {
      obj.borrows = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBorrowsResponse>): QueryBorrowsResponse {
    const message = { ...baseQueryBorrowsResponse } as QueryBorrowsResponse;
    message.borrows = (object.borrows ?? []).map((e) =>
      DBBorrow.fromPartial(e)
    );
    return message;
  },
};

const baseQueryBorrowsAllRequest: object = {};

export const QueryBorrowsAllRequest = {
  encode(
    _: QueryBorrowsAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBorrowsAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBorrowsAllRequest } as QueryBorrowsAllRequest;
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

  fromJSON(_: any): QueryBorrowsAllRequest {
    const message = { ...baseQueryBorrowsAllRequest } as QueryBorrowsAllRequest;
    return message;
  },

  toJSON(_: QueryBorrowsAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBorrowsAllRequest>): QueryBorrowsAllRequest {
    const message = { ...baseQueryBorrowsAllRequest } as QueryBorrowsAllRequest;
    return message;
  },
};

const baseQueryBorrowsAllResponse: object = {};

export const QueryBorrowsAllResponse = {
  encode(
    message: QueryBorrowsAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.borrows) {
      DBBorrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBorrowsAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBorrowsAllResponse,
    } as QueryBorrowsAllResponse;
    message.borrows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrows.push(DBBorrow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBorrowsAllResponse {
    const message = {
      ...baseQueryBorrowsAllResponse,
    } as QueryBorrowsAllResponse;
    message.borrows = (object.borrows ?? []).map((e: any) =>
      DBBorrow.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryBorrowsAllResponse): unknown {
    const obj: any = {};
    if (message.borrows) {
      obj.borrows = message.borrows.map((e) =>
        e ? DBBorrow.toJSON(e) : undefined
      );
    } else {
      obj.borrows = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBorrowsAllResponse>
  ): QueryBorrowsAllResponse {
    const message = {
      ...baseQueryBorrowsAllResponse,
    } as QueryBorrowsAllResponse;
    message.borrows = (object.borrows ?? []).map((e) =>
      DBBorrow.fromPartial(e)
    );
    return message;
  },
};

const baseDBBorrow: object = { denom: "", amount: "" };

export const DBBorrow = {
  encode(
    message: DBBorrow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== undefined) {
      StringValue.encode(
        { value: message.address! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DBBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDBBorrow } as DBBorrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.denom = reader.string();
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

  fromJSON(object: any): DBBorrow {
    const message = { ...baseDBBorrow } as DBBorrow;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : undefined;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: DBBorrow): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<DBBorrow>): DBBorrow {
    const message = { ...baseDBBorrow } as DBBorrow;
    message.address = object.address ?? undefined;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseQueryCollateralsRequest: object = { address: "" };

export const QueryCollateralsRequest = {
  encode(
    message: QueryCollateralsRequest,
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
  ): QueryCollateralsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralsRequest,
    } as QueryCollateralsRequest;
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

  fromJSON(object: any): QueryCollateralsRequest {
    const message = {
      ...baseQueryCollateralsRequest,
    } as QueryCollateralsRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryCollateralsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralsRequest>
  ): QueryCollateralsRequest {
    const message = {
      ...baseQueryCollateralsRequest,
    } as QueryCollateralsRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryCollateralsResponse: object = {};

export const QueryCollateralsResponse = {
  encode(
    message: QueryCollateralsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collaterals) {
      DBCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollateralsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralsResponse,
    } as QueryCollateralsResponse;
    message.collaterals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collaterals.push(
            DBCollateral.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralsResponse {
    const message = {
      ...baseQueryCollateralsResponse,
    } as QueryCollateralsResponse;
    message.collaterals = (object.collaterals ?? []).map((e: any) =>
      DBCollateral.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryCollateralsResponse): unknown {
    const obj: any = {};
    if (message.collaterals) {
      obj.collaterals = message.collaterals.map((e) =>
        e ? DBCollateral.toJSON(e) : undefined
      );
    } else {
      obj.collaterals = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralsResponse>
  ): QueryCollateralsResponse {
    const message = {
      ...baseQueryCollateralsResponse,
    } as QueryCollateralsResponse;
    message.collaterals = (object.collaterals ?? []).map((e) =>
      DBCollateral.fromPartial(e)
    );
    return message;
  },
};

const baseQueryCollateralsAllRequest: object = {};

export const QueryCollateralsAllRequest = {
  encode(
    _: QueryCollateralsAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollateralsAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralsAllRequest,
    } as QueryCollateralsAllRequest;
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

  fromJSON(_: any): QueryCollateralsAllRequest {
    const message = {
      ...baseQueryCollateralsAllRequest,
    } as QueryCollateralsAllRequest;
    return message;
  },

  toJSON(_: QueryCollateralsAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCollateralsAllRequest>
  ): QueryCollateralsAllRequest {
    const message = {
      ...baseQueryCollateralsAllRequest,
    } as QueryCollateralsAllRequest;
    return message;
  },
};

const baseQueryCollateralsAllResponse: object = {};

export const QueryCollateralsAllResponse = {
  encode(
    message: QueryCollateralsAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collaterals) {
      DBCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollateralsAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralsAllResponse,
    } as QueryCollateralsAllResponse;
    message.collaterals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collaterals.push(
            DBCollateral.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralsAllResponse {
    const message = {
      ...baseQueryCollateralsAllResponse,
    } as QueryCollateralsAllResponse;
    message.collaterals = (object.collaterals ?? []).map((e: any) =>
      DBCollateral.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryCollateralsAllResponse): unknown {
    const obj: any = {};
    if (message.collaterals) {
      obj.collaterals = message.collaterals.map((e) =>
        e ? DBCollateral.toJSON(e) : undefined
      );
    } else {
      obj.collaterals = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralsAllResponse>
  ): QueryCollateralsAllResponse {
    const message = {
      ...baseQueryCollateralsAllResponse,
    } as QueryCollateralsAllResponse;
    message.collaterals = (object.collaterals ?? []).map((e) =>
      DBCollateral.fromPartial(e)
    );
    return message;
  },
};

const baseDBCollateral: object = { denom: "", amount: "" };

export const DBCollateral = {
  encode(
    message: DBCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== undefined) {
      StringValue.encode(
        { value: message.address! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DBCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDBCollateral } as DBCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.denom = reader.string();
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

  fromJSON(object: any): DBCollateral {
    const message = { ...baseDBCollateral } as DBCollateral;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : undefined;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: DBCollateral): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<DBCollateral>): DBCollateral {
    const message = { ...baseDBCollateral } as DBCollateral;
    message.address = object.address ?? undefined;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of RateStrategy items. */
  RateStrategy(
    request: QueryRateStrategyRequest
  ): Promise<QueryRateStrategyResponse>;
  /** Queries a list of RateStrategiesAll items. */
  RateStrategiesAll(
    request: QueryRateStrategiesAllRequest
  ): Promise<QueryRateStrategiesAllResponse>;
  /** Queries a list of Asset items. */
  Asset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
  /** Queries a list of AssetsAll items. */
  AssetsAll(request: QueryAssetsAllRequest): Promise<QueryAssetsAllResponse>;
  /** Queries a list of AccountCollaterals items. */
  AccountCollaterals(
    request: QueryAccountCollateralsRequest
  ): Promise<QueryAccountCollateralsResponse>;
  /** Queries a list of AccountDebts items. */
  AccountDebts(
    request: QueryAccountDebtsRequest
  ): Promise<QueryAccountDebtsResponse>;
  /** Queries a list of AccountData items. */
  AccountData(
    request: QueryAccountDataRequest
  ): Promise<QueryAccountDataResponse>;
  /** Queries a list of Borrows items. */
  Borrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse>;
  /** Queries a list of BorrowsAll items. */
  BorrowsAll(request: QueryBorrowsAllRequest): Promise<QueryBorrowsAllResponse>;
  /** Queries a list of Collaterals items. */
  Collaterals(
    request: QueryCollateralsRequest
  ): Promise<QueryCollateralsResponse>;
  /** Queries a list of CollateralsAll items. */
  CollateralsAll(
    request: QueryCollateralsAllRequest
  ): Promise<QueryCollateralsAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RateStrategy = this.RateStrategy.bind(this);
    this.RateStrategiesAll = this.RateStrategiesAll.bind(this);
    this.Asset = this.Asset.bind(this);
    this.AssetsAll = this.AssetsAll.bind(this);
    this.AccountCollaterals = this.AccountCollaterals.bind(this);
    this.AccountDebts = this.AccountDebts.bind(this);
    this.AccountData = this.AccountData.bind(this);
    this.Borrows = this.Borrows.bind(this);
    this.BorrowsAll = this.BorrowsAll.bind(this);
    this.Collaterals = this.Collaterals.bind(this);
    this.CollateralsAll = this.CollateralsAll.bind(this);
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

  RateStrategiesAll(
    request: QueryRateStrategiesAllRequest
  ): Promise<QueryRateStrategiesAllResponse> {
    const data = QueryRateStrategiesAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "RateStrategiesAll",
      data
    );
    return promise.then((data) =>
      QueryRateStrategiesAllResponse.decode(new _m0.Reader(data))
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

  AssetsAll(request: QueryAssetsAllRequest): Promise<QueryAssetsAllResponse> {
    const data = QueryAssetsAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AssetsAll",
      data
    );
    return promise.then((data) =>
      QueryAssetsAllResponse.decode(new _m0.Reader(data))
    );
  }

  AccountCollaterals(
    request: QueryAccountCollateralsRequest
  ): Promise<QueryAccountCollateralsResponse> {
    const data = QueryAccountCollateralsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountCollaterals",
      data
    );
    return promise.then((data) =>
      QueryAccountCollateralsResponse.decode(new _m0.Reader(data))
    );
  }

  AccountDebts(
    request: QueryAccountDebtsRequest
  ): Promise<QueryAccountDebtsResponse> {
    const data = QueryAccountDebtsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountDebts",
      data
    );
    return promise.then((data) =>
      QueryAccountDebtsResponse.decode(new _m0.Reader(data))
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

  Borrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse> {
    const data = QueryBorrowsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "Borrows",
      data
    );
    return promise.then((data) =>
      QueryBorrowsResponse.decode(new _m0.Reader(data))
    );
  }

  BorrowsAll(
    request: QueryBorrowsAllRequest
  ): Promise<QueryBorrowsAllResponse> {
    const data = QueryBorrowsAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "BorrowsAll",
      data
    );
    return promise.then((data) =>
      QueryBorrowsAllResponse.decode(new _m0.Reader(data))
    );
  }

  Collaterals(
    request: QueryCollateralsRequest
  ): Promise<QueryCollateralsResponse> {
    const data = QueryCollateralsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "Collaterals",
      data
    );
    return promise.then((data) =>
      QueryCollateralsResponse.decode(new _m0.Reader(data))
    );
  }

  CollateralsAll(
    request: QueryCollateralsAllRequest
  ): Promise<QueryCollateralsAllResponse> {
    const data = QueryCollateralsAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "CollateralsAll",
      data
    );
    return promise.then((data) =>
      QueryCollateralsAllResponse.decode(new _m0.Reader(data))
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
