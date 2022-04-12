import { TimeMeta } from ".";

export interface CompetitionLeaderboard {
  poolId: number
  market: string
  volumeShifted: number
  volumeValue: number
  volume: string
  height: number
}

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
  market?: string[]
  from: string
  until: string
}