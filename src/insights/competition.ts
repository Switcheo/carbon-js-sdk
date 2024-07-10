import { PageMeta, TimeMeta } from "./common";

export interface CompetitionItem {
  id: string;
  competitionId: string;
  subCompetitionId: string;
  market: string | null;
  start: string; // string representation of timestamp
  end: string; // string representation of timestamp
  enablePNL: boolean | null;
  minBalance: number | null;
  enableVolume: boolean | null;
  makerIncentive: boolean | null;
  config: CompetitionItemConfig;
}

export interface CompetitionItemConfig {
  type: string;
  lending: string[];
  markets: string[];
  promoMarkets: string[];
  preTradeMarket: string[];
  minBalance: number;
  volPerPoint: string;
  allowDecimals: boolean;
  derMultiplier: string;
  lendingQuantity: string;
  promoMultiplier: number;
  spotsMultiplier: number;
  preTradeMarketCount: number;
  preTradeMarketVolume: number;
}

export interface QueryGetCompetitionListResponse {
  models: CompetitionItem[];
  meta: PageMeta;
}

export interface QueryGetCompetitionListRequest {
  limit?: number;
  offset?: number;
}

// Volume Rankings (for legacy Demex Trading Competition circa 2021-2022)
export interface VolumeLeaderboardEntry {
  competitionId: string;
  address: string;
  market: string;
  totalVolume: string;
  rank: string;
  username: string | null;
  twitter: string | null;
}
export interface QueryGetVolumeCompetitionLeaderboardResponse {
  entries: VolumeLeaderboardEntry[];
  meta: TimeMeta;
}

export interface QueryGetVolumeCompetitionLeaderboardRequest {
  competitionId: string;
  market?: string;
  from?: string;
  until?: string;
}

// Volume Rankings (for Perps Trading Competition on Demex from 14 Nov 2023 - 28 Nov 2023)
export interface PerpsCompTradingVolumeEntry {
  address: string;
  volume: string;
  rank: string;
  tier: string;
  username: string | null;
  twitter: string | null;
}
export interface QueryGetPerpsCompTradingVolumeResponse {
  entries: PerpsCompTradingVolumeEntry[];
}

export interface QueryGetPerpsCompTradingVolumeRequest {
  competitionId: string;
  address?: string;
}

// PNL Rankings
export interface PNLLeaderboardEntry {
  competitionId: string;
  address: string;
  market: string;
  realizedPnl: string;
  unrealizedPnl: string;
  initialBalance: string;
  totalPnl: string;
  PnlPercent: string;
  finalPnlPercent: string;
  refereeBonusPercent: string;
  rank: string;
  username: string | null;
  twitter: string | null;
}

// Lottery Rankings
export interface LotteryLeaderboardEntry {
  rank: string;
  competitionId: string;
  address: string;
  twitter: string | null;
  username: string | null;
  longestPosition: string;
  maxLeverage: string;
  referralTickets: string;
  liquidationTickets: string;
  positionTickets: string;
  totalTickets: string;
}

// Demex Trading League
export interface LeaderboardLeagueEntry {
  rank: string;
  totalPoints: string;
  address: string;
  volume: string;
  spotsVolume: string;
  derVolume: string;
  freq: string;
  username: string | null;
  twitter: string | null;
  spotsPoint: string;
  derPoints: string;
  freqFactor: string;
}
export interface LeaderboardCosmosEntry {
  rank: string;
  totalPoints: string;
  subCompetitionId: string;
  participantsCount: string;
  spotsPoint: string;
  derPoints: string;
  promoPoints: string;
  volume: string;
  spotsVolume: string;
  derVolume: string;
  promoVolume: string;
}

export interface PersistenceTraders {
  address: string;
  points: string;
  rank: string;
  volume: string;
}

export interface PersistenceRewardsEntry {
  totalPoints: string;
  epochStart: string;
  epochEnd: string;
  traders: PersistenceTraders[];
}


export interface QueryGetPNLCompetitionLeaderboardResponse {
  entries: PNLLeaderboardEntry[];
  meta: TimeMeta;
}

export interface QueryGetPNLCompetitionLeaderboardRequest {
  competitionId: string;
  market?: string;
}

export interface QueryGetLotteryCompetitionLeaderboardResponse {
  entries: LotteryLeaderboardEntry[];
}

export interface QueryGetLeagueCompetitionLeaderboardResponse {
  entries: LeaderboardLeagueEntry[];
}

export interface QueryGetCosmosCompetitionLeaderboardResponse {
  entries: LeaderboardCosmosEntry[];
}

export interface QueryGetLotteryCompetitionLeaderboardRequest {
  competitionId: string;
  market?: string;
}
export interface QueryGetLeagueCompetitionLeaderboardRequest {
  competitionId: string;
  subCompetitionId?: string;
}

export interface QueryGetCosmosCompetitionLeaderboardRequest {
  competitionId: string;
}

export interface QueryCarbonCreditsRewardsRequest {
  epoch: number;
  unixStart: number;
}

export interface QueryCarbonCreditsRewardsResponse {
  result: PersistenceRewardsEntry;
}

export interface QueryPnlLeaderboardRequest {
  unixStart: number;
  unixEnd: number;
  limit?: number;
  market?: string;
}

export interface QueryPnlLeaderboardResponse {
  result: {
    entries: {
      rows: PersistencePnl[];
    }
  }
}

export interface PersistencePnl {
  rank: string;
  address: string;
  realizedPnl: string;
  unrealizedPnl: string;
  totalPnl: string;
  profitPercent: string;
  totalMargin: string;
}
