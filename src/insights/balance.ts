import { PageMeta, QueryByPageRequest } from ".";

export interface Balance {
  denom: string
  balance: string
}

export interface BalanceDetails {
  id: string
  denom: string
  address: string
  location: string
  balance: string
  lastSyncHeight: number
}

export interface QueryGetTotalBalancesResponse {
  entries: Balance[]
}

export interface QueryGetRichListRequest extends QueryByPageRequest {
  denom?: string
  location?: string
  address?: string
}

export interface QueryGetRichListResponse {
  models: BalanceDetails[]
  meta: PageMeta
}
