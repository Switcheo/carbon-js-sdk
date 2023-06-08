import { PageMeta, QueryByPageRequest } from "./common";

export interface Block {
  id: string;
  height: number;
  time: string;
  proposerAddress: string;
}

export type QueryGetBlocksRequest = QueryByPageRequest

export interface QueryGetBlocksResponse {
  models: Block[];
  meta: PageMeta;
}

export interface QueryGetBlockRequest {
  height: number;
}

export interface QueryGetBlockAtUnixRequest {
  unix: number;
}

export interface QueryGetBlockResponse {
  model: Block;
}

export interface QueryGetBlockTimeResponse {
  data: number;
}
