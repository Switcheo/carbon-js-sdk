export interface Balance {
  id: string
  denom: string
  address: string
  location: string
  balance: string
  lastSyncHeight: number
}

export interface QueryGetRichListRequest {
  denom?: string
  location?: string
  address?: string
  limit?: number
  offset?: number
}

export interface QueryGetRichListResponse {
  models: Balance[]
  meta: {
    count: number
    limit: number
    offset: number
  }
}
