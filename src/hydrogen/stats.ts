export interface GetStatsRequest { }

export interface GetStatsResponse {
    transactionCounts: TransactionCount[]
    monitors: Monitor[]
    queues: Queue[]
}

export interface TransactionCount {
    blockchain: string
    count: number
}

export interface Monitor {
    blockchain: string
    polledHeight: number
    latestHeight: number
    blocksLeft: number
    headerPolledHeight: number
    headerBlocksLeft: number
}

export interface Queue {
    queueName: string
    waiting: number
    delayed: number
    active: number
    failed: number
}
