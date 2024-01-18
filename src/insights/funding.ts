export interface FundingHistoryAvg {
  market: string;
  "1h": string;
  "4h": string;
  "8h": string;
  "12h": string;
  "16h": string;
  "20h": string;
  "24h": string;
}

export interface QueryGetFundingHistoryAvgResponse {
  entries: FundingHistoryAvg[];
}

export interface QueryGetFundingHistoryAvgRequest {
  market: string;
}

export interface FundingHistoryAll {
  market: string;
  fundingRate: number;
  lastFundingAt: string;
}

export interface QueryGetFundingHistoryAllResponse {
  entries: FundingHistoryAll[];
}

export interface QueryGetFundingHistoryAllRequest {
  market?: string;
  limit?: string;
  offset?: string;
}
