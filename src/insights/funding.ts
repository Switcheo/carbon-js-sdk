import { PageMeta } from "./common";

export interface FundingHistory {
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
  entries: FundingHistory[];
}

export interface QueryGetFundingRateRequest {
  market?: string;
}
