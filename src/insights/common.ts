export const InsightsEndpoints = {
  // User api
  'user/active': '/user/active',

  // Pool api
  'pool/list': '/pool/list',
  'pool/volume': '/pool/:poolId/volume',

  // Node api
  'node/list': '/node/list',

  // Block api
  'block/list': '/chain/block/list',
  'block/details': '/chain/block/:height/detail',
  'block/time': '/chain/block/time',
  'block/unix': '/chain/block/unix/:unix/detail',

  // Transaction api
  'tx/list': '/chain/tx/list',
  'tx/types': '/chain/tx/types',
  'tx/activity': '/chain/tx/activity',

  // Balance api
  'balance/total': '/balance/total',
  'balance/list': '/balance/list',
  'balance/change': '/balance/:address/change',
  'balance/history': '/balance/:address/:denom/history',
  'balance/supply': '/balance/supply',

  // Position api
  'position/leaderboard': '/position/:fromUnix/:toUnix/leaderboard',
}

export type Interval = "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "quarter"

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
