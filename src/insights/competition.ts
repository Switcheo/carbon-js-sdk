import { TimeMeta } from ".";

export interface QueryGetCompetitionLeaderboardResponse {
  entries: {
    address: string
    market: string
    totalVolume: string
    rank: string
    username: string
    twitter: string
  }[]
  meta: TimeMeta
}

export interface QueryGetCompetitionLeaderboardRequest {
  market?: string
  from: string
  until: string
}