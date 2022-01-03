import { PageMeta, QueryByPageRequest } from "./common";

export interface QueryGetNodesRequest extends QueryByPageRequest {}

export interface NodeItem {
  nodeId: string;
  rpcUrl: string;
  wsUrl: string;
  faucetUrl: string,
  insightsUrl: string;
  restUrl: string
  moniker: string;
  appBuild: string;
  lastupdated: string; // string representation of timestamp
  rpcUptime: string; // string rep of number
  wsUptime: string; // string rep of number
  insightUptime: string; // string rep of number
}

export interface QueryGetNodesResponse {
  models: NodeItem[]
  meta: PageMeta
}
