export const InsightsEndpoints = {
  // Chain api
  'chain/stake': '/chain/stake',
  'chain/transaction': '/chain/transaction',

  // User api
  'user/active': '/user/active',
  'user/profile': '/user/profile',
  'user/total': '/user/total',
  'user/growth': '/user/growth',

  // Pool api
  'pool/list': '/pool/list',
  'pool/volume': '/pool/:poolId/volume',
  'pools/volume': '/pool/volume',

  //market
  'market/volume': '/market/volume',

  // Node api
  'node/list': '/node/list',

  // Balance api
  'balance/total': '/balance/total',
  'balance/list': '/balance/list',
  'balance/change': '/balance/:address/change',
  'balance/supply': '/balance/supply',
  'balance/history': '/balance/:address/:denom/history',

  // Position api
  'position/leaderboard': '/position/:fromUnix/:toUnix/leaderboard',
}

export type Interval = "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter"

export interface QueryByTimeRequest {
  interval?: Interval
  from?: string
  until?: string
}

export interface QueryByPageRequest {
  limit?: number
  offset?: number
}

export interface InsightsQueryResponse<T> {
  result: T
}

export interface Entries<T> {
  entries: T
}

export interface TimeMeta {
  from: string
  until: string
  interval: Interval
}

export interface PageMeta {
  count: number
  limit: number
  offset: number
}
