import { QueryByPageRequest } from "./common";

export interface ProposalVoteEntry {
  hash: string;
  height: number;
  timestamp: string;
  proposalId: number;
  address: string;
  input: string;
  isValidator: boolean;
  validatorAddress: string;
  type: string;
}

export interface QueryGetProposalVotesResponse {
  entries: ProposalVoteEntry[];
}

export interface GetProposalVotesPathParams {
  proposalId: number;
}

export interface GetProposalVotesQueryParams extends QueryByPageRequest {
  type?: string;
}