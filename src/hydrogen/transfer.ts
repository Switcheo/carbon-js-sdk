export interface QueryGetTransferPayloadsRequest {
    include_tx: boolean
    bridge_blockchain: string
    from_address: string
    to_address: string
    asset_name: string
    offset: number
    limit: number
}

export interface QueryGetTransferPayloadsResponse {
    data: TransferPayload[]
}

export interface TransferPayload {
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
    source_transaction: Transaction
    bridging_transaction: Transaction
    desination_transaction: Transaction
}

export interface Transaction {
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
