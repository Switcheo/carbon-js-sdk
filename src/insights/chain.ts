import { QueryByTimeRequest, TimeMeta } from "./common";

export interface Stake{
    staked: string
    total: string
    date: string
    height: number
}

export interface TxEvent{
    type: string
    count: number
    total: number
}

export interface Transaction{
    date: string
    txCount: string
    txTotal: string
    txEvent: TxEvent[]
}

export interface QueryGetStakeRequest extends QueryByTimeRequest { }

export interface QueryGetStakeResponse {
    entries: Stake[]
    meta: TimeMeta
}

export interface QueryGetTransactionRequest extends QueryByTimeRequest {}

export interface QueryGetTransactionResponse {
    entries: Transaction[]
    meta: TimeMeta
}