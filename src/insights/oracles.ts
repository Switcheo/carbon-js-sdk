import { QueryByTimeRequest, TimeMeta } from "./common";

export interface OraclesPrice {
  denom: string;
  index: number;
  twap: number;
}

export interface QueryGetOraclesPriceRequest extends QueryByTimeRequest {
  intervalDivision?: number;
  denom?: string;
}

export interface QueryGetOraclesPriceResponse {
  entries: {
    timestamp: string;
    tokens: OraclesPrice[]
  }[];
  meta: TimeMeta;
}