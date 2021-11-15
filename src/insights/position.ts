import { Entries, PageMeta, QueryByPageRequest } from "./common";

export interface IndivPnl {
  address: string;
  realizedPnl: string;
}

export interface GetLeaderboardPathParams {
  fromUnix: number;
  toUnix: number;
}

export interface GetLeaderboardQueryParams extends QueryByPageRequest {
  market?: string;
  sort?: "ASC" | "DESC";
  address?: string;
}

export interface LeaderboardResult {
  rows: IndivPnl[];
  meta: PageMeta;
}

export type QueryGetLeaderboardResponse = Entries<LeaderboardResult>