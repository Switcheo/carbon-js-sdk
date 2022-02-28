import { Blockchain } from "../util/blockchain";

export interface GetTransfersRequest {
  bridging_blockchain?: string
  source_blockchain?: string
  destination_blockchain?: string
  from_address?: string
  to_address?: string
  asset_name?: string
  from_asset?: string
  to_asset?: string
  offset?: number
  limit?: number
}

export interface GetTransfersResponse {
  data: CrossChainTransfer[]
  pagination: {
    total: number
    currentOffset: number
    limit: number
  }
}

export interface GetDetailedTransfersResponse {
  data: CrossChainTransferDetailed[]
  pagination: {
    total: number
    currentOffset: number
    limit: number
  }
}

export interface CrossChainTransfer {
  id: string
  cross_chain_flow_id: string
  asset_name: string
  from_address: string
  from_address_hash: string
  from_asset: string
  from_asset_hash: string
  to_address: string
  to_address_hash: string
  to_asset: string
  to_asset_hash: string
  amount: string
  fee_address: string
  fee_address_hash: string
  fee_amount: string
  nonce: string
  created_at: Date
  updated_at: Date

  source_blockchain: Blockchain | null
  bridging_blockchain: Blockchain | null
  destination_blockchain: Blockchain | null
}

export interface CrossChainTransferDetailed extends CrossChainTransfer {
  source_transaction: ChainTransaction | null;
  bridging_transaction: ChainTransaction | null;
  destination_transaction: ChainTransaction | null;
}

export interface ChainTransaction {
  id: string
  event_id: string
  cross_chain_flow_id: string
  link_status: string
  tx_hash: string
  tx_fee: string
  blockchain: Blockchain
  contract: string
  relayed_by: string
  destination_blockchain: Blockchain
  destination_contract: string
  destination_method: string
  broadcast_status: string
  broadcasted_by: string
  broadcasted_at: Date
  created_at: Date
  updated_at: Date
  block_time: number
  block_height: number
}
