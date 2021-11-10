export interface IndivPnl {
  address: string;
  realizedpnl: string;
}

export interface QueryGetLeaderboardRequest {
  fromUnix: number;
  toUnix: number;
}

export interface QueryGetLeaderboardResponse {
  entries: IndivPnl[]
}
