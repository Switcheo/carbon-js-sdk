import { TimeMeta } from ".";

export interface LeaderboardEntry {
  address: string
  market: string
  totalVolume: string
  rank: string
  username: string | null
  twitter: string | null
}

export interface QueryGetCompetitionLeaderboardResponse {
  entries: LeaderboardEntry[]
  meta: TimeMeta
}

export interface QueryGetCompetitionLeaderboardRequest {
  market?: string
  from: string
  until: string
}