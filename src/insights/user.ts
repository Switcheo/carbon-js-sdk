import { QueryByTimeRequest, TimeMeta } from ".";

export interface ActiveAccounts {
  count: string
  time: string
}

export interface QueryGetActiveAccountsRequest extends QueryByTimeRequest { }

export interface QueryGetActiveAccountsResponse {
  entries: ActiveAccounts[]
  meta: TimeMeta
}
