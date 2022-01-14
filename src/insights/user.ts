import { QueryByTimeRequest, TimeMeta } from "./common";

export interface ActiveAccounts {
  t: string
  height: Long
  users: string
}

export interface Profile {
  address: string
  firstSeenBlock: number
  lastSeenBlock: number
  lastSeen: string
  firstSeen: string
  username: string
  twitter: string
}

export interface QueryGetUserProfileRequest { 
  username?: string
  address?: string
}

export interface QueryGetUserProfileResponse {
  entries: Profile
}

export interface QueryGetActiveAccountsRequest extends QueryByTimeRequest { }

export interface QueryGetActiveAccountsResponse {
  entries: ActiveAccounts[]
  meta: TimeMeta
}
