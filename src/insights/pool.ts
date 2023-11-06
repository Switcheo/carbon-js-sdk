import { PageMeta, QueryByPageRequest, QueryByTimeRequest, TimeMeta } from "./common";

export interface Pool {
  id: string;
  poolId: number;
  name: string;
  denom: string;
  denomA: string;
  denomB: string;
  address: string;
  creatorAddress: string;
  market: string | null;
}

export interface PoolTokens {
  total: number;
  denom: string;
  amountShifted: number;
  amountValue: number;
  balance: string;
}

export interface PoolVolume {
  poolId: number;
  t: string;
  height: number;
  volume: string;
}

export interface PoolsVolume {
  poolId: number;
  market: string;
  volumeShifted: number;
  volumeValue: number;
  volume: string;
  height: number;
}

export interface PoolsLiquidity {
  poolId: number;
  amountValue: number;
  tokens: PoolTokens[];
}

export interface QueryGetPoolsRequest extends QueryByPageRequest {}

export interface QueryGetPoolsResponse {
  models: Pool[];
  meta: PageMeta;
}

export interface QueryGetPoolVolumeRequest extends QueryByTimeRequest {
  poolId: number;
}

export interface QueryGetPoolVolumeResponse {
  entries: PoolVolume[];
  meta: TimeMeta;
}

export interface QueryGetPoolsVolumeRequest extends QueryByTimeRequest {
  market?: string[];
}

export interface QueryGetPoolsLiquidityRequest extends QueryByTimeRequest {
  poolId?: string;
}

export interface QueryGetPoolsVolumeResponse {
  entries: {
    date: string;
    volumeValue: string;
    totalVolumeValue: string;
    markets: PoolsVolume[];
  }[];
  meta: TimeMeta;
}

export interface QueryGetPoolsLiquidityResponse {
  entries: {
    date: string;
    pools: PoolsLiquidity[];
  }[];
  meta: TimeMeta;
}

//pool history
export interface QueryGetPoolHistoryRequest extends QueryByPageRequest {
  poolId: number | string;
}
export interface Action {
  category: string;
  denom: string;
  amount: number;
  amountShifted: number;
  amountValue: number;
}

export interface PositionHistoryEntry {
  timestamp: string;
  height: number;
  vault: string;
  poolId: number;
  actions: Action[];
}

export interface QueryGetPoolHistoryResponse {
  entries: PositionHistoryEntry[];
  meta: PageMeta;
}

export interface QueryGetUserRewardsClaimHistoryRequest extends QueryByPageRequest {
  address: string;
}

export interface tokenAmounts{
  denom: string;
  amount: number;
  amountValue: number;
}

export interface ClaimTransactionEntry{
  address: string;
  poolId: number;
  height: number;
  timestamp: string;
  hash?: string;
  tokens: tokenAmounts[];

}

export interface QueryGetUserRewardsClaimHistoryResponse {
  entries: ClaimTransactionEntry[];
  meta: PageMeta;
}
