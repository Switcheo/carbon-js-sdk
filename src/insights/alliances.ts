import { QueryByTimeRequest, TimeMeta } from "./common";

export interface AlliancesStake {
  date: string;
  stakedValue: string;
  totalStakedValue: string;
  tokens: {
    denom: string;
    staked: number;
    totalStaked: number;
    stakedValue: number;
    totalstakedValue: number;
    height: number;
  }[],
}

export interface QueryGetAlliancesStakeRequest extends QueryByTimeRequest { }

export interface QueryGetAlliancesStakeResponse {
  entries: AlliancesStake[];
  meta: TimeMeta;
}

export interface AlliancesRewards {
  date: string;
  rewardsValue: string;
  totalRewardsValue: string;
  tokens: {
    denom: string;
    rewards: string;
    totalRewards: string;
    rewardsValue: string;
    totalRewardsValue: string;
  }
}

export interface QueryGetAlliancesRewardsRequest extends QueryByTimeRequest { }

export interface QueryGetAlliancesRewardsResponse {
  entries: AlliancesRewards[];
  meta: TimeMeta;
}