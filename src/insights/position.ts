import { Entries, PageMeta, QueryByPageRequest, QueryByTimeRequest, TimeMeta } from "./common";

export interface IndivPnl {
  rank: string;
  address: string;
  realizedPnl: string;
  unrealizedPnl: string;
  totalPnl: string;
}

export interface GetLeaderboardPathParams {
  fromUnix: number;
  toUnix: number;
}

export interface GetLeaderboardQueryParams extends QueryByPageRequest {
  market?: string;
  address?: string;
}

export interface LeaderboardResult {
  rows: IndivPnl[];
  meta: PageMeta;
}

export type QueryGetLeaderboardResponse = Entries<LeaderboardResult>;

//Liquidation And ADL
export interface LiquidationEntry {
  id: string;
  block_height: string;
  triggered_block_height: string;
  address: string;
  market: string;
  side: string;
  price: string;
  quantity: string;
  available: string;
  filled: string;
  allocated_margin_amount: string;
  allocated_margin_denom: string;
  status: string;
  order_type: string;
  initiator: string;
  time_in_force: string;
  stop_price: string;
  trigger_type: string;
  is_liquidation: boolean;
  is_post_only: boolean;
  is_reduce_only: boolean;
  block_created_at: string;
  pool_id: string;
  avg_filled_price: string;
  last_updated_block_height: string;
}

export interface GetLiquidationAndADLQueryParams extends QueryByPageRequest {}

export interface QueryGetLiquidationAndADLResponse {
  entries: LiquidationEntry[];
  meta: PageMeta;
}

//Liquidation Engine
export interface GetLiquidationEngineParams extends QueryByPageRequest {}

export interface QueryGetLiquidationEngineResponse {
  entries: LiquidationEntry[];
  meta: PageMeta;
}

//position view | profit size risk
export enum PositionViewOptions {
  RISK = "risk",
  PROFIT = "profit",
  SIZE = "size",
}
export interface GetPositionsViewPathParams {
  view: PositionViewOptions;
}

export interface GetPositionsViewQueryParams extends QueryByPageRequest {
  market?: string;
}

export interface GetPositionsViewEntry {
  address: string;
  username: string;
  lots: string;
  entryPrice: string;
  realizedPnl: string;
  allocatedMarginDenom: string;
  allocatedMarginAmount: string;
  openedBlockHeight: number;
  estLiquidationPrice: string;
  market: string;
}

export interface QueryGetPositionsViewResponse {
  entries: GetPositionsViewEntry[];
  meta: PageMeta;
}

export interface GetPositionStatsPathParams {
  address: string;
}

export interface GetPositionStatsQueryParams extends QueryByTimeRequest {}

export interface GetPositionStatsEntry {
  time: string;
  realizedPnl: string;
  makerFee: string;
  takerFee: number;
  fundingFee: string;
  cumulative: string;
}
export interface QueryGetPositionStatsResponse {
  entries: GetPositionStatsEntry[];
  meta: TimeMeta;
}
