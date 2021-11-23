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

export interface PoolVolume {
  poolId: number
  t: string
  height: number
  volume: string
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
