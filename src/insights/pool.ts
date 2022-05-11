import { PageMeta, QueryByPageRequest, QueryByTimeRequest, TimeMeta } from "./common";

export interface Pool {
  id: string
  poolId: number
  name: string
  denom: string
  denomA: string
  denomB: string
  address: string
  creatorAddress: string
  market: string | null
}

export interface PoolTokens {
  total: number
  denom: string
  amountShifted: number
  amountValue: number
  balance: string
}

export interface PoolVolume {
  poolId: number
  t: string
  height: number
  volume: string
}

export interface PoolsVolume {
  poolId: number
  market: string
  volumeShifted: number
  volumeValue: number
  volume: string
  height: number
}

export interface PoolsLiquidity {
  poolId: number
  amountValue: number
  tokens: PoolTokens[]
}

export interface QueryGetPoolsRequest extends QueryByPageRequest { }

export interface QueryGetPoolsResponse {
  models: Pool[]
  meta: PageMeta
}

export interface QueryGetPoolVolumeRequest extends QueryByTimeRequest {
  poolId: number
}

export interface QueryGetPoolVolumeResponse {
  entries: PoolVolume[]
  meta: TimeMeta
}

export interface QueryGetPoolsVolumeRequest extends QueryByTimeRequest {
  market?: string[]
}

export interface QueryGetPoolsLiquidityRequest extends QueryByTimeRequest {
  poolId?: string
}

export interface QueryGetPoolsVolumeResponse {
  entries: {
    date: string
    volumeValue: string
    totalVolumeValue: string
    markets: PoolsVolume[]
  }[]
  meta: TimeMeta
}

export interface QueryGetPoolsLiquidityResponse {
  entries: {
    date: string
    pools: PoolsLiquidity[]
  }[]
  meta: TimeMeta
}

//pool history
export interface QueryGetPoolHistoryRequest extends QueryByPageRequest {
  poolId: number | string
  sort?: 'DESC' | 'ASC'
}
export interface Action {
  category:      string;
  denom:         string;
  amount:        number;
  amountShifted: number;
  amountValue:   number;
}

export interface QueryGetPoolHistoryResponse {
  entries: {
    timestamp: Date;
    height:    number;
    vault:     string;
    poolID:    number;
    actions:   Action[];
  }[]
  meta: PageMeta
}