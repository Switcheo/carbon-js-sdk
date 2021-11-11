import { PageMeta, QueryByPageRequest, QueryByTimeRequest, TimeMeta } from ".";

export interface Transaction {
  hash: string
  height: number
  timestamp: string
  creator: string
}

export interface TxActivity {
  t: string
  height: number
  txs: string
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

export interface QueryGetTransactionActivityResponse {
  entries: TxActivity[]
  meta: TimeMeta
}
