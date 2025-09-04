export interface FundingRate {
  market: string;
  "1h": string;
  "4h": string;
  "8h": string;
  "12h": string;
  "16h": string;
  "20h": string;
  "24h": string;
}

export interface QueryGetFundingRateResponse {
  entries: FundingRate[];
}

export interface QueryGetFundingRateRequest {
  market: string;
}

export interface FundingHistory {
  market: string;
  fundingRate: number;
  lastFundingAt: string;
}

export interface QueryGetFundingHistoryResponse {
  entries: FundingHistory[];
}

export interface QueryGetFundingHistoryRequest {
  market?: string;
  limit?: number;
  offset?: number;
}

// Period is the duration (in number of days) that the query should return results for
export interface QueryGetFundingHistoryGraphDataRequest {
  market: string;
  period?: number;
}

export interface FundingHistoryGraphData {
  hourly: string;
  market: string;
  avgFunding: string;
}

export interface QueryGetFundingHistoryGraphDataResponse {
  entries: FundingHistoryGraphData[];
}
