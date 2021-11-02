import { PageMeta, QueryByPageRequest, QueryByTimeRequest, TimeMeta } from ".";

export interface Transaction {
  hash: string
  height: number
  timestamp: string
  creator: string
}

export interface QueryGetTransactionsRequest extends QueryByPageRequest {
  typeUrl?: string
  height?: number
  hash?: string
}

export interface QueryGetTransactionsResponse {
  models: Transaction[]
  meta: PageMeta
}

export interface QueryGetTransactionTypesResponse {
  data: string[]
}

export interface QueryGetTransactionActivityRequest extends QueryByTimeRequest { }

// TODO: Add type for transaction activity
export interface QueryGetTransactionActivityResponse {
  entries: any[]
  meta: TimeMeta
}