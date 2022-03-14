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

export interface PoolVolumes {
  poolId: number
  market: string
  volumeShifted: number
  volumeValue: number
  volume: string
  height: number
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
  poolIds: number[]
}

export interface QueryGetPoolVolumesRequest extends QueryByTimeRequest {
  market?: string[]
}

export interface QueryGetPoolVolumesResponse {
  entries: {
    date: string
    volumeValue: string
    totalVolumeValue: string
    markets: PoolVolumes[]
  }[]
  meta: TimeMeta
}
