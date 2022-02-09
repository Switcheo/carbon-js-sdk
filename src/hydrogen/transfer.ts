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
    crossChainFlowId: string
    assetName: string
    fromAddress: string
    fromAddressHash: string
    fromAsset: string
    fromAssetHash: string
    toAddress: string
    toAddressHash: string
    toAsset: string
    toAssetHash: string
    amount: string
    feeAddress: string
    feeAddressHash: string
    feeAmount: string
    nonce: string
    createdAt: string
    updatedAt: string
    sourceTransaction: Transaction
    bridgingTransaction: Transaction
    desinationTransaction: Transaction
}

export interface Transaction {
    id: string
    eventId: string
    crossChainFlowId: string
    linkStatus: string
    txHash: string
    txFee: string
    blockChain: string
    contract: string
    relayedBy: string
    destinationBlockChain: string
    destinationContract: string
    destinationMethod: string
    broadcastStatus: string
    broadcastedBy: string
    broadcastedAt: string
    createdAt: string
    updatedAt: string
    blockTime: string
    blockHeight: string
}
