import { QueryByTimeRequest, TimeMeta } from "./common";

export interface AlliancesStake {
  date: string;
  stakedValue: string,
  totalStakedValue: string,
  tokens: {
    denom: string,
    staked: number,
    stakedValue: number,
    height: number
  }[],
}

export interface QueryGetAlliancesStakeRequest extends QueryByTimeRequest { }

export interface QueryGetAlliancesStakeResponse {
  entries: AlliancesStake[];
  meta: TimeMeta;
}
