import { QueryByPageRequest } from "./common";

export interface DelegationEntry {
  blockHeight: number;
  timestamp: string;
  type: string;
  denom: string;
  amount: number;
  amountValue: number;
  delegator: string;
  validator: string;
  newValidator: string;
  newShares: number;
  completionTime: string;
}

export interface QueryGetDelegationsResponse {
  entries: DelegationEntry[];
}

export interface GetDelegationsPathParams {
  delegator: string;
}

export interface GetDelegationsQueryParams extends QueryByPageRequest {
  time?: string;
  denom?: string;
  type?: string;
  validator?: string;
}
