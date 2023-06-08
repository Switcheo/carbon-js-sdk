import { QueryByTimeRequest, TimeMeta } from "./common";

export interface Stake {
  staked: string;
  total: string;
  date: string;
  height: number;
}

export interface TxEvent {
  type: string;
  count: number;
  total: number;
}

export interface Transaction {
  date: string;
  txCount: string;
  txTotal: string;
  txEvent: TxEvent[];
}

export type QueryGetStakeRequest = QueryByTimeRequest

export interface QueryGetStakeResponse {
  entries: Stake[];
  meta: TimeMeta;
}

export type QueryGetTransactionRequest = QueryByTimeRequest

export interface QueryGetTransactionResponse {
  entries: Transaction[];
  meta: TimeMeta;
}

export interface QueryGetAvgBlockTimeRequest extends QueryByTimeRequest {
  hours: number;
}

export interface AvgBlockTime {
  avgBlocktime: string;
  unit: string;
}

export interface QueryGetAvgBlockTimeResponse {
  entries: AvgBlockTime[];
}
