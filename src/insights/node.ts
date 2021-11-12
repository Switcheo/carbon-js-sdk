import { PageMeta, QueryByPageRequest } from ".";

export interface QueryGetNodesRequest extends QueryByPageRequest {}

export interface QueryGetNodesResponse {
  // TODO: Add type for node 
  models: any[]
  meta: PageMeta
}
