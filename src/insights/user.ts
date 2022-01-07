import { QueryByTimeRequest, TimeMeta } from "./common";

export interface ActiveAccounts {
  t: string
  height: Long
  users: string
}

export interface QueryGetActiveAccountsRequest extends QueryByTimeRequest { }

export interface QueryGetActiveAccountsResponse {
  entries: ActiveAccounts[]
  meta: TimeMeta
}
