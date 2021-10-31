import { Interval } from ".";

export interface PoolVolume {
  poolId: number
  t: string
  height: number
  volume: string
}

export interface QueryGetPoolVolumeRequest {
  poolId: number
  interval?: Interval
  from?: string
  until?: string
}

export interface QueryGetPoolVolumeResponse {
  entries: PoolVolume[]
  meta: {
    from: string
    until: string
    interval: Interval
  }
}
