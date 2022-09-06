export interface GetRelaysRequest {
  source_tx_hash?: string
  bridging_tx_hash?: string
  destination_tx_hash?: string
}

export interface GetRelaysResponse {
  data: RelaysResponse[]
  pagination: {
    total: number
    current_offset: number
    limit: number
  }
}

export interface RelaysResponse {
  id: string,
  flow_type: string,
  bridge: string,
  source_tx_hash: string,
  bridging_tx_hash: string,
  destination_tx_hash: string,
  payload_type: string,
  created_at: string,
  updated_at: string,
  status: string,
  source_blockchain: string,
  destination_blockchain: string,
  source_event_index: number,
  bridging_event_index: number,
  destination_event_index: number,
  source_broadcast_status: string,
  bridging_broadcast_status: string
}