import { Dayjs } from "dayjs";

export const InsightsEndpoints = {
  // Chain api
  "chain/stake": "/chain/stake",
  "chain/transaction": "/chain/transaction",
  "chain/blocktime": "/chain/blocktime",
  "chain/inflation": "/chain/inflation",

  // User api
  "user/active": "/user/active",
  "user/profile": "/user/profile",
  "user/total": "/user/total",
  "user/growth": "/user/growth",
  "user/volume": "/user/:address/volume",
  "user/pnl": "/user/:address/pnl",
  "user/balance/graph": "/user/:address/balance/graph",
  "user/pnl/graph": "/user/:address/pnl/graph",
  "user/fundings": "/user/:address/fundings",
  "user/funding/breakdown": "/user/:address/funding/breakdown",
  "user/connected/wallet": "/user/connected/wallet",


  // Pool api
  "pool/list": "/pool/list",
  "pool/volume": "/pool/:poolId/volume",
  "pools/volume": "/pool/volume",
  "pools/liquidity": "/pool/liquidity",
  "pool/history": "/pool/history",
  "pool/perp/history": "/pool/perp/history",
  "pool/perp/apy": "/pool/perp/:id/apy",
  "pool/vault/apy": "/pool/vault/:id/apy",
  "user/pool/rewards": "/user/:address/pool/rewards",
  "pool/perp/depositor/actions": "/pool/perp/depositor/:address/actions",


  //user vault api
  "vault/user/apy": "/vault/user/:id/apy",
  "vault/user/depositors": "/vault/user/:id/depositors",
  "vault/user/actions": "/vault/user/:id/actions",
  "vault/depositor/actions": "/vault/depositor/:address/actions",
  "vault/depositor/deposits": "/vault/depositor/:address/deposits",


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
  "position/stats": "/position/stats/:address",

  // Competition api
  "competition/list": "/competition/list",
  "competition/leaderboard": "/competition/leaderboard",
  "competition/leaderboardpnl": "/competition/leaderboardpnl",
  "competition/leaderboardlottery": "/competition/leaderboardlottery",
  "competition/leaderboardleague": "/competition/leaderboardleague",
  "competition/leaderboardvolume": "/competition/leaderboardvolume",
  "competition/leaderboardcosmos": "/competition/leaderboardcosmos",

  //Coin Gecko Tokens api
  "info/denom_gecko_map": "/info/denom_gecko_map",

  //funding
  "market/funding/history/all": "/market/funding/history/all",
  "market/funding/history": "/market/funding/history",
  "market/funding/history/chart": "/market/funding/history/chart",

  // Proposal api
  "proposal/votes": "/gov/proposal/:proposalId/votes",

  // Delegations api
  "delegations/delegator": "/delegations/:delegator",

  // Oracles api
  "info/oracles_price": "/info/oracles_price",

  // Alliances api
  "alliances/stake": "/alliances/stake",
  "alliances/rewards": "/alliances/rewards",

  // Crosschain api
  "crosschain/volume": "/crosschain/volume",

  "reward/epoch": "/reward/epoch/:epoch/:unixStart",
  "reward/leaderboard": "/reward/:unixStart/:unixEnd/leaderboard",
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

export interface NoIntervalTimeMeta {
  from: string;
  until: string;
}

export interface ParsedTimeMeta {
  from: Dayjs;
  until: Dayjs;
  interval: Interval;
}

export interface PageMeta {
  count: number;
  limit: number;
  offset: number;
}
