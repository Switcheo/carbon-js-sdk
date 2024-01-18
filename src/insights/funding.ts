export interface HistoricalFundingHistory {
  market: string;
  "1h": string;
  "4h": string;
  "8h": string;
  "12h": string;
  "16h": string;
  "20h": string;
  "24h": string;
}

export interface QueryGetHistoricalFundingHistoryResponse {
  entries: HistoricalFundingHistory[];
}

export interface QueryGetHistoricalFundingHistoryRequest {
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
