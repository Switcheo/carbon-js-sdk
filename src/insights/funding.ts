import { PageMeta, TimeMeta } from "./common";

export interface FundingHistory {
  lastFundingAt: string
  market: string
  fundingRate: string
}

export interface QueryGetFundingRateResponse {
  entries: FundingHistory[]
  meta: PageMeta 
}

export interface QueryGetFundingRateRequest {
  market?: string
  limit?: number
  offset?: number
}