export const InsightsEndpoints = {
  // Chain api
  "chain/stake": "/chain/stake",
  "chain/transaction": "/chain/transaction",
  "chain/blocktime": "/chain/blocktime",

  // User api
  "user/active": "/user/active",
  "user/profile": "/user/profile",
  "user/total": "/user/total",
  "user/growth": "/user/growth",

  // Pool api
  "pool/list": "/pool/list",
  "pool/volume": "/pool/:poolId/volume",
  "pools/volume": "/pool/volume",
  "pools/liquidity": "/pool/liquidity",
  "pool/history": "/pool/history",

  //market
  "market/volume": "/market/volume",

  // Node api
  "node/list": "/node/list",

  // Balance api
  "balance/total": "/balance/total",
  "balance/list": "/balance/list",
  "balance/change": "/balance/:address/change",
  "balance/supply": "/balance/supply",
  "balance/history": "/balance/:address/:denom/history",
  "balance/distribution": "/balance/distribution",

  // Position api
  "position/leaderboard": "/position/:fromUnix/:toUnix/leaderboard",
  "position/view": "/position/view/:view",
  "position/liquidation": "/position/liquidation",
  "position/liquidation/engine": "/position/liquidation/engine",

  // Competition api
  "competition/list": "/competition/list",
  "competition/leaderboard": "/competition/leaderboard",
  "competition/leaderboardpnl": "/competition/leaderboardpnl",
  "competition/leaderboardlottery": "/competition/leaderboardlottery",

  //Coin Gecko Tokens api
  "info/denom_gecko_map": "/info/denom_gecko_map",

  //funding
  "market/funding": "/market/funding",
};

export type Interval = "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter";

export interface QueryByTimeRequest {
  interval?: Interval;
  from?: string;
  until?: string;
}

export interface QueryByPageRequest {
  limit?: number;
  offset?: number;
  sort?: "ASC" | "DESC";
}

export interface InsightsQueryResponse<T> {
  result: T;
}

export interface Entries<T> {
  entries: T;
}

export interface TimeMeta {
  from: string;
  until: string;
  interval: Interval;
}

export interface PageMeta {
  count: number;
  limit: number;
  offset: number;
}
