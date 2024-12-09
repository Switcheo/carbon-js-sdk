import { QueryByTimeRequest, TimeMeta } from "./common";

export interface MarketVolume {
  market: string;
  volumeShifted: number;
  volumeValue: number;
  volume: string;
  height: number;
}

export interface QueryGetMarketVolumeRequest extends QueryByTimeRequest {
  market?: string;
  marketType?: MarketType;
}

export interface QueryGetMarketVolumeResponse {
  entries: {
    date: string;
    volumeValue: string;
    totalVolumeValue: string;
    markets: MarketVolume[];
  }[];
  meta: TimeMeta;
}

export enum MarketType {
  SPOT = "spot",
  FUTURES = "futures",
}
