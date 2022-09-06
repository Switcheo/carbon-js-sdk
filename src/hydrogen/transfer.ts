import { Blockchain } from "../util/blockchain";

export interface GetTransfersRequest {
  bridging_blockchain?: string
  source_blockchain?: string
  destination_blockchain?: string
  address?: string
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
    current_offset: number
    limit: number
  }
}

export interface GetDetailedTransfersResponse {
  data: CrossChainTransferDetailed[]
  pagination: {
    total: number
    current_offset: number
    limit: number
  }
}

export enum CrossChainFlowStatus {
  InTransit = 'in_transit',
  Completed = 'completed',
  Refunded = 'refunded',
  FailedAndNotRecoverable = 'failed_and_not_recoverable', // due to development/testing/adding wrong asset/ or something more sinister
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
  status: CrossChainFlowStatus
  carbon_token_id: string
  recovery_address_hash: string
  recovery_address: string
}

export interface CrossChainTransferDetailed extends CrossChainTransfer {
  source_event: ChainTransaction | null;
  bridging_event: ChainTransaction | null;
  destination_event: ChainTransaction | null;
}

export interface ChainTransaction {
  id: string
  blockchain: Blockchain
  contract: string
  block_height: number
  tx_hash: string
  tx_fee: string
  sender: string
  sender_hash: string
  index: number
  name: string
  event_params: EventParams
  processing_status: string
  confirmation_status: string
  confirmed_at: Date
  created_at: Date
  updated_at: Date
  block_time: number
  link_status: string
  cross_chain_flow_id: string
}

export type EventParams =
  string
  | CrossChainEventEventParams
  | IbcWriteAckEventEventParams
  | IbcSendPacketEventEventParams
  | VerifyHeaderAndExecuteTxEventEventParams
  | NEOCrossChainUnlockEventEventParams
  | NEOCrossChainLockEventEventParams
  | MakePolyProofEventEventParams
  | Attribute[]

export interface CrossChainEventEventParams {
  txId: string
  sender: string
  rawdata: string
  toChainId: string
  toContract: string
  proxyOrAssetContract: string
}

export interface NEOCrossChainUnlockEventEventParams {
  fromChainId: string
  toContract: string
  txHash: string
}


export interface NEOCrossChainLockEventEventParams {
  key: string
  tx_param: string
  to_chain_id: string
  from_address: string
  from_contract: string
}

export interface VerifyHeaderAndExecuteTxEventEventParams {
  fromChainId: string
  toContractAddr?: string
  toContract?: string
  fromChainTxHash: string
  crossChainTxHash: string
}

export interface MakePolyProofEventEventParams {
  NOTIFY_MAKE_PROOF: string
  fromChainID: number
  toChainID: number
  txHash: string
  blockheight: number
  key: string
}

export interface IbcEventEventParams {
  packet_data: string
  packet_data_hex: string
  packet_timeout_height: string
  packet_timeout_timestamp: string
  packet_sequence: string
  packet_src_port: string
  packet_src_channel: string
  packet_dst_port: string
  packet_dst_channel: string
  packet_connection: string
  denom: string

}

export interface IbcWriteAckEventEventParams extends IbcEventEventParams {
  packet_ack: string
  packet_ack_hex: string
}

export interface IbcSendPacketEventEventParams extends IbcEventEventParams {
  packet_channel_ordering: string
}

export type Attribute = {
  key: string
  value: string
}
