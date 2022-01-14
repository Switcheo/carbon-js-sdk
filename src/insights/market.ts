import { QueryByTimeRequest, TimeMeta } from "./common";

export interface marketVolume {
  market: string
  t: string
  height: number
  volume: string
}

export interface QueryGetMarketVolumeRequest extends QueryByTimeRequest {
  market: string
}

export interface QueryGetMarketVolumeResponse {
  entries: marketVolume[]
  meta: TimeMeta
}
