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

export interface QueryGetPoolsRequest extends QueryByPageRequest { }

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

export interface QueryGetPerpPoolHistoryRequest extends QueryByPageRequest {
  address: string
}

export interface QueryVaultAPY extends QueryByPageRequest {
  id: number;
}
export interface QueryUserVaultDepositors extends QueryByPageRequest {
  id: number;
}

export interface QueryUserVaultActions extends QueryByPageRequest {
  id: number;
}

export interface QueryUserVaultDepositorActions extends QueryByPageRequest {
  address: string;
}

export interface VaultAPYEntry {
  denom: string;
  annualizedApy1day: number | null;
  annualizedApy7days: number | null;
  annualizedApy14days: number | null;
  annualizedApy30days: number | null;
  annualizedApy90days: number | null;
}

export interface UserVaultDepositorEntry {
  address: string;
  shares: string;
}

export interface UserVaultActionEntry {
  timestamp: string;
  type: string;
  amount: string;
  hash: string;
}
export interface UserVaultDepositorActionEntry {
  timestamp: string;
  poolId: number;
  type: string;
  amount: string;
  denom: string;
  hash: string;
}

export interface QueryVaultAPYResponse {
  entries: VaultAPYEntry[];
  meta: PageMeta;
}

export interface QueryUserVaultDepositorsResponse {
  entries: UserVaultDepositorEntry[];
  meta: PageMeta;
}

export interface QueryUserVaultActionsResponse {
  entries: UserVaultActionEntry[];
  meta: PageMeta;
}

export interface QueryUserVaultDepositorActionsResponse {
  entries: UserVaultDepositorActionEntry[];
  meta: PageMeta;
}

export interface PerpPositionHistoryEntry {
  poolId: number;
  address: string;
  netDeposit: number;
  deposit: number;
  withdrawal: number;
}

export interface QueryGetPerpPoolHistoryResponse {
  entries: PerpPositionHistoryEntry[];
  meta: PageMeta;
}

export interface QueryGetPoolHistoryResponse {
  entries: PositionHistoryEntry[];
  meta: PageMeta;
}

export interface QueryGetUserRewardsClaimHistoryRequest extends QueryByPageRequest {
  address: string;
}

export interface TokenAmounts {
  denom: string;
  amount: number;
  amountValue: number;
}

export interface ClaimTransactionEntry {
  address: string;
  poolId: number;
  height: number;
  timestamp: string;
  hash?: string;
  tokens: TokenAmounts[];

}

export interface QueryGetUserRewardsClaimHistoryResponse {
  entries: ClaimTransactionEntry[];
  meta: PageMeta;
}
