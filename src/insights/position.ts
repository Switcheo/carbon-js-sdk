import { Entries, PageMeta, QueryByPageRequest } from "./common";

export interface IndivPnl {
  address: string;
  realizedPnl: string;
  rank: string;
}

export interface GetLeaderboardPathParams {
  fromUnix: number;
  toUnix: number;
}

export interface GetLeaderboardQueryParams extends QueryByPageRequest {
  market?: string;
  sort?: "ASC" | "DESC";
  address?: string;
}

export interface LeaderboardResult {
  rows: IndivPnl[];
  meta: PageMeta;
}

export type QueryGetLeaderboardResponse = Entries<LeaderboardResult>

//Liquidation And ADL
export interface GetLiquidationAndADLQueryParams extends QueryByPageRequest {
  sort?: "ASC" | "DESC";
}

export interface QueryGetLiquidationAndADLResponse {
  entries: {
    id:                     string;
    blockHeight:            string;
    triggeredBlockHeight:   string;
    address:                string;
    market:                 string;
    side:                   string;
    price:                  string;
    quantity:               string;
    available:              string;
    filled:                 string;
    allocatedMarginAmount:  string;
    allocatedMarginDenom:   string;
    status:                 string;
    orderType:              string;
    initiator:              string;
    timeInForce:            string;
    stopPrice:              string;
    triggerType:            string;
    isLiquidation:          boolean;
    isPostOnly:             boolean;
    isReduceOnly:           boolean;
    blockCreatedAt:         Date;
    poolID:                 string;
    avgFilledPrice:         string;
    lastUpdatedBlockHeight: string;
  }[]
  meta: PageMeta
}

//Liquidation Engine
export interface GetLiquidationEngineParams extends QueryByPageRequest {
  sort?: "ASC" | "DESC";
}

export interface QueryGetLiquidationEngineResponse {
  entries: {
    id:                     string;
    blockHeight:            string;
    triggeredBlockHeight:   string;
    address:                string;
    market:                 string;
    side:                   string;
    price:                  string;
    quantity:               string;
    available:              string;
    filled:                 string;
    allocatedMarginAmount:  string;
    allocatedMarginDenom:   string;
    status:                 string;
    orderType:              string;
    initiator:              string;
    timeInForce:            string;
    stopPrice:              string;
    triggerType:            string;
    isLiquidation:          boolean;
    isPostOnly:             boolean;
    isReduceOnly:           boolean;
    blockCreatedAt:         Date;
    poolID:                 string;
    avgFilledPrice:         string;
    lastUpdatedBlockHeight: string;
  }[]
  meta: PageMeta
}

//position view | profit size risk
export interface GetPositionsViewPathParams {
  view: "risk" | "profit" | "size"
}

export interface GetPositionsViewQueryParams extends QueryByPageRequest {
  sort?: "ASC" | "DESC";
}

export interface QueryGetPositionsViewResponse {
  entries: {
    address:               string;
    username:              string;
    lots:                  string;
    entryPrice:            string;
    realizedPnl:           string;
    allocatedMarginDenom:  string;
    allocatedMarginAmount: string;
    openedBlockHeight:     number;
    estLiquidationPrice:   string;
  }[]
  meta: PageMeta
}